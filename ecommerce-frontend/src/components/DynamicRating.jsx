import './dynamicrating.css';

function DynamicRating({rating}) {

  if (rating >= 7) {
    return (<div className='positive-rating'>positive</div>)
  }
  else if (rating <= 4) {
    return (<div className='negative-rating'>negative</div>)
  }
  else {
    return (<div className='mixed-rating'>mixed</div>)
  }
}

export default DynamicRating;
