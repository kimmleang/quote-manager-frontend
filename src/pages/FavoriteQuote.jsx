import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaEdit, FaSave, FaSort } from "react-icons/fa";
import { fetchQuotes, updateQuote, deleteQuote } from "../redux/quoteSlice";
import LoadingModal from "../components/LoadingModal";

const FavoriteQuote = () => {
  const dispatch = useDispatch();
  const { quotes, loading } = useSelector((state) => state.quote);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [search, setSearch] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    dispatch(fetchQuotes());
    window.scrollTo(0, 0);
  }, [dispatch]);

  const startEditing = (quote) => {
    setEditId(quote.id);
    setEditText(quote.content);
    setEditAuthor(quote.author);
  };

  const saveEdit = async (id) => {
    setIsProcessing(true);
    const updatedQuote = { content: editText, author: editAuthor };
    await dispatch(updateQuote({ id, updatedQuote }));
    setEditId(null);
    setIsProcessing(false);
  };

  const removeFavorite = async (id) => {
    setIsProcessing(true);
    await dispatch(deleteQuote(id));
    setIsProcessing(false);
  };

  const toggleSort = () => {
    setSortAscending(!sortAscending);
  };

  const filteredQuotes = quotes
    .filter((quote) =>
      quote.content.toLowerCase().includes(search.toLowerCase()) ||
      quote.author.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sortAscending ? a.id - b.id : b.id - a.id));

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Favorite Quotes</h2>

      {/* Search & Sort */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search quotes or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-4/5 p-2 border rounded"
        />
        <button
          onClick={toggleSort}
          className="flex items-center px-2 py-2 border rounded text-blue-600 hover:bg-blue-100"
        >
          Sort  {sortAscending ? "▲" : "▼"}

        </button>
      </div>

      {isProcessing && <LoadingModal />}

      {loading ? (
        <p className="text-gray-500 text-center">Loading...</p>
      ) : filteredQuotes.length === 0 ? (
        <p className="text-gray-500 text-center">No favorite quotes found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredQuotes.map((quote) => (
            <li key={quote.id} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow">
              <div className="flex-1">
                {editId === quote.id ? (
                  <>
                    <input
                      type="text"
                      className="w-full mb-1 p-2 border rounded"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded"
                      value={editAuthor}
                      onChange={(e) => setEditAuthor(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <p className="text-lg font-medium">"{quote.content}"</p>
                    <p className="text-sm text-gray-600">- {quote.author}</p>
                  </>
                )}
              </div>

              <div className="flex space-x-2 ml-3">
                {editId === quote.id ? (
                  <button onClick={() => saveEdit(quote.id)} className="bg-green-500 text-white px-3 py-3 rounded-full hover:bg-green-700">
                    <FaSave />
                  </button>
                ) : (
                  <button onClick={() => startEditing(quote)} className="bg-blue-500 text-white px-3 py-3 rounded-full hover:bg-blue-700">
                    <FaEdit />
                  </button>
                )}
                <button onClick={() => removeFavorite(quote.id)} className="bg-red-500 text-white px-3 py-3 rounded-full hover:bg-red-700">
                  <FaTrash />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteQuote;