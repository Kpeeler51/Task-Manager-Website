import React from 'react';
import './FilterButtons.css';

// Define the props for the FilterButtons component
interface FilterButtonsProps {
    setFilter: (filter: 'all' | 'completed' | 'active') => void;  // Function to update the filter
    currentFilter: 'all' | 'completed' | 'active'; // Current active filter
  }
  // FilterButtons component to render the filter buttons.
  const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter, currentFilter }) => {
    return (
      <div className="filter-buttons">
        {/* Button to show all tasks */}
        <button 
          onClick={() => setFilter('all')}
          className={currentFilter === 'all' ? 'active' : ''}
        >
          All Tasks
        </button>
        {/* Button to show completed tasks */}
        <button 
          onClick={() => setFilter('completed')}
          className={currentFilter === 'completed' ? 'active' : ''}
        >
          Completed Tasks
        </button>
        {/* Button to show active tasks. */}
        <button 
          onClick={() => setFilter('active')}
          className={currentFilter === 'active' ? 'active' : ''}
        >
          Active Tasks
        </button>
      </div>
    );
  };
  
  export default FilterButtons;
  