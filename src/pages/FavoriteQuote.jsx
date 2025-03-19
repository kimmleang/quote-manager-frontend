import React, { useState } from "react";
import { FaTrash, FaEdit, FaSave, FaSort } from "react-icons/fa";

const FavoriteQuote = () => {
  const [favorites, setFavorites] = useState([
    { id: 1, text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { id: 2, text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { id: 3, text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { id: 4, text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { id: 5, text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { id: 6, text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { id: 7, text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
    { id: 8, text: "It is never too late to be what you might have been.", author: "George Eliot" },
    { id: 9, text: "Do what you feel in your heart to be right – for you’ll be criticized anyway.", author: "Eleanor Roosevelt" },
    { id: 10, text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { id: 11, text: "Act as if what you do makes a difference. It does.", author: "William James" },
  ]);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const [search, setSearch] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Enable edit mode
  const startEditing = (quote) => {
    setEditId(quote.id);
    setEditText(quote.text);
    setEditAuthor(quote.author);
  };

  // Save edited quote
  const saveEdit = (id) => {
    setFavorites(favorites.map((quote) =>
      quote.id === id ? { ...quote, text: editText, author: editAuthor } : quote
    ));
    setEditId(null); // Exit edit mode
  };

  // Remove quote from favorites
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((quote) => quote.id !== id));
  };

  // Toggle sort order
  const toggleSort = () => {
    setSortAscending(!sortAscending);
  };

  // Filtered & Sorted Quotes
  const filteredQuotes = favorites
    .filter((quote) =>
      quote.text.toLowerCase().includes(search.toLowerCase()) ||
      quote.author.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sortAscending ? a.id - b.id : b.id - a.id));

  // Pagination Logic
  const totalPages = Math.ceil(filteredQuotes.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentQuotes = filteredQuotes.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">Favorite Quotes</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search quotes or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />

      {/* Sort Button */}
      <button
        onClick={toggleSort}
        className="mb-4 flex items-center px-4 py-2 border rounded text-blue-600 hover:bg-blue-100"
      >
        Sort by ID {sortAscending ? "▲" : "▼"}
        <FaSort className="ml-2" />
      </button>

      {filteredQuotes.length === 0 ? (
        <p className="text-gray-500 text-center">No favorite quotes found.</p>
      ) : (
        <ul className="space-y-4">
          {currentQuotes.map((quote) => (
            <li key={quote.id} className="bg-gray-100 p-4 rounded-lg flex justify-between items-center">
              {editId === quote.id ? (
                <div className="w-full">
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
                </div>
              ) : (
                <div>
                  <p className="text-lg font-medium">"{quote.text}"</p>
                  <p className="text-sm text-gray-600">- {quote.author}</p>
                </div>
              )}

              <div className="flex space-x-3">
                {editId === quote.id ? (
                  <button onClick={() => saveEdit(quote.id)} className="text-green-600 hover:text-green-800">
                    <FaSave size={18} />
                  </button>
                ) : (
                  <button onClick={() => startEditing(quote)} className="text-blue-600 hover:text-blue-800">
                    <FaEdit size={18} />
                  </button>
                )}
                <button onClick={() => removeFavorite(quote.id)} className="text-red-600 hover:text-red-800">
                  <FaTrash size={18} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded text-blue-600 hover:bg-blue-100 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-1 border rounded bg-gray-200">{currentPage} / {totalPages}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded text-blue-600 hover:bg-blue-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FavoriteQuote;
