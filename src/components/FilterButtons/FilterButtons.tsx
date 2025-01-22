import './FilterButtons.css'

interface FilterButtonsProps {
    setFilter: (filter: 'all' | 'completed' | 'active') => void;
    currentFilter: 'all' | 'completed' | 'active';
  }
  
  const FilterButtons: React.FC<FilterButtonsProps> = ({ setFilter, currentFilter }) => {
    return (
      <div className="filter-buttons">
        <button 
          onClick={() => setFilter('all')}
          className={currentFilter === 'all' ? 'active' : ''}
        >
          All Tasks
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={currentFilter === 'completed' ? 'active' : ''}
        >
          Completed Tasks
        </button>
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
  