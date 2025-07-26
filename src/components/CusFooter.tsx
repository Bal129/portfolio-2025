import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function CusFooter() {
  return (
    <footer className="c-container-light c-text-1 text-center p-3">
      <p className="font-monospace">
        Thank you for reaching the end of the portfolio.
        This is website that I created from scratch using React.js.
        <br />
        <br />
        <a 
          href="#home" 
          className="c-main-button rounded-3 p-2 m-3"
          style={{ textDecoration:"none" }}
        >
          To Top
          <FontAwesomeIcon icon={faArrowUp} className="ps-1"/>
        </a>
      </p>
    </footer>
  )
}

export default CusFooter;