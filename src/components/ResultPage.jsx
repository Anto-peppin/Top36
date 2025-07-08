import '../styles/resultPage.css'
function ResultPage() {
  const won = true; // for now, hardcode status

  return (
    <div className='resultMain'>
     <center>
         <h2 style={{ color: won ? 'green' : 'gray' ,fontSize:'clamp(3em,5vw,5em)',margin:'10px 0 20px 0'}}>
        {won ? '🎉 You Win!' : 'Better Luck Next Time!'}
      </h2>
      <button>
        Share & Earn
      </button>
     </center>
    </div>
  );
}

export default ResultPage;
