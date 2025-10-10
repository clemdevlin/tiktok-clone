'use client';

import { useState } from 'react';


interface TableRow {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
}

export default function Page() {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [data, setData] = useState<TableRow[]>([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'active' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'inactive' },
    { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'active' },
    { id: '5', name: 'Shadrack Green', email: 'shad@example.com', role: 'User', status: 'inactive' },
    { id: '6', name: 'Madrid Caleb', email: 'mad@example.com', role: 'User', status: 'active' },
    { id: '7', name: 'Beatrice Brown', email: 'beatrice@example.com', role: 'User', status: 'inactive' },
    { id: '8', name: 'Isaac Alison', email: 'isaac@example.com', role: 'User', status: 'active' },
    { id: '9', name: 'Ryan Nugs', email: 'ryan@example.com', role: 'User', status: 'inactive' },
    { id: '10', name: 'Malice Brown', email: 'malice@example.com', role: 'User', status: 'inactive' },
  ]);

  const toggleRow = (id: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedRows.size === data.length) {
      setSelectedRows(new Set());
    } else {
      const allIds = new Set(data.map(row => row.id));
      setSelectedRows(allIds);
    }
  };

  const isRowSelected = (id: string) => selectedRows.has(id);

  // Bulk actions
  const activateSelected = () => {
    setData(prev => prev.map(row => 
      selectedRows.has(row.id) ? { ...row, status: 'active' } : row
    ));
  };

  const deactivateSelected = () => {
    setData(prev => prev.map(row => 
      selectedRows.has(row.id) ? { ...row, status: 'inactive' } : row
    ));
  };

  const deleteSelected = () => {
    setData(prev => prev.filter(row => !selectedRows.has(row.id)));
    setSelectedRows(new Set());
  };

  return (
    <div className="p-6">
      {/* Bulk Actions */}
      {selectedRows.size > 0 && (
        <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center justify-between">
            <p className="text-sm text-blue-700">
              {selectedRows.size} row{selectedRows.size > 1 ? 's' : ''} selected
            </p>
            <div className="flex gap-2">
              <button
                onClick={activateSelected}
                className="px-3 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                Activate
              </button>
              <button
                onClick={deactivateSelected}
                className="px-3 py-1 text-xs bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                Deactivate
              </button>
              <button
                onClick={deleteSelected}
                className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setSelectedRows(new Set())}
                className="px-3 py-1 text-xs bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white shadow border border-gray-100 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="w-12 px-6 py-3 text-left">
                <input
                  type="checkbox"
                  checked={selectedRows.size === data.length && data.length > 0}
                  onChange={toggleSelectAll}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row) => (
              <tr 
                key={row.id}
                className={`cursor-pointer transition-colors ${
                  isRowSelected(row.id) 
                    ? 'bg-blue-50 hover:bg-blue-100' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleRow(row.id)}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={isRowSelected(row.id)}
                    onChange={() => toggleRow(row.id)}
                    onClick={(e) => e.stopPropagation()}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {row.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                    row.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}