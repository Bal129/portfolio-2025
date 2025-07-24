import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function CusFooter() {
  return (
    <footer className="c-container-light c-text-dark text-center p-3">
      <p>
        Thank you for reaching the end of the portfolio. 
        This is website that I created from scratch using React.js.
        <a href="#home" className="c-main-button rounded-pill p-2 mx-3">
          <FontAwesomeIcon icon={faArrowUp}/>
        </a>
      </p>
    </footer>
  )
}

export default CusFooter;