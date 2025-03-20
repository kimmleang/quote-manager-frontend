import React, { useEffect, useState } from "react";
import { FaSyncAlt, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomQuote, saveQuote } from "../redux/quoteSlice";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SuccessModal from "../components/SuccessModal";
import LoadingModal from "../components/LoadingModal.jsx";

const GenerateQuote = () => {
  const dispatch = useDispatch();
  const { quote, loading, error, saveError } = useSelector((state) => state.quote);
  const { token } = useSelector((state) => state.auth);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  useEffect(() => {
    const storedQuote = localStorage.getItem("quote");
    if (storedQuote) {
      dispatch({ type: "quote/fetchRandom/fulfilled", payload: JSON.parse(storedQuote) });
    } else {
      dispatch(fetchRandomQuote());
    }
  }, [dispatch]);

  useEffect(() => {
    if (quote) {
      localStorage.setItem("quote", JSON.stringify(quote));
    }
  }, [quote]);

  const handleSaveQuote = async () => {
    if (token) {
      setShowLoadingModal(true); 
      const result = await dispatch(saveQuote(quote));
      setShowLoadingModal(false); 
      if (result.type === "quote/save/fulfilled") {
        setModalTitle("Success");
        setModalMessage("Quote added to favorites successfully!");
        setShowSuccessModal(true);
      } else if (result.payload && result.payload.message === "Quote already exists") {
        setModalTitle("Info");
        setModalMessage("Quote already exists in your favorites.");
        setShowSuccessModal(true);
      }
    } else {
      alert("You need to be logged in to save quotes.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50 p-6">
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 text-center">
        Generate a <span className="font-bold text-blue-600">Inspirational Quote</span>
      </h1>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-blue-700 transition"
          onClick={() => dispatch(fetchRandomQuote())}
          disabled={loading}
        >
          <FaSyncAlt /> {loading ? "Loading..." : "Generate Quote"}
        </button>
        <button
          className="bg-red-600 text-white px-4 py-4 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-red-700 transition"
          onClick={handleSaveQuote}
          disabled={!token}
        >
          <FaHeart/> 
        </button>
      </div>

      <div className="mt-6 p-6 w-full max-w-2xl bg-white shadow-lg rounded-xl text-center">
        {loading && <Loading />}
        {error && <ErrorMessage message={error} />}
        {saveError && <ErrorMessage message={saveError} />}
        {!loading && !error && (
          <>
            <p className="text-lg text-gray-800 italic">"{quote?.content || "No quote available"}"</p>
            <p className="mt-4 text-gray-600 font-medium">- {quote?.author || "Unknown"}</p>
          </>
        )}
      </div>

      {showLoadingModal && <LoadingModal />}
      {showSuccessModal && (
        <SuccessModal
          title={modalTitle}
          message={modalMessage}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
};

export default GenerateQuote;