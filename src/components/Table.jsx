// src/components/Table.js

import React from 'react';

const policies = [
  {
    type: 'Health',
    id: 'POL12345',
    claimed: 'No',
    holderName: 'John Doe',
    premiumAmount: '$500',
    coverageAmount: '$5000'
  },
  {
    type: 'Auto',
    id: 'POL67890',
    claimed: 'Yes',
    holderName: 'Jane Smith',
    premiumAmount: '$300',
    coverageAmount: '$3000'
  }
  // Add more policies as needed
];

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type of Policy</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Claimed</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Policy Holder Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Premium Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coverage Amount</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {policies.map((policy, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{policy.type}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.claimed}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.holderName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.premiumAmount}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{policy.coverageAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
