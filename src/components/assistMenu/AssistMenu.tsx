import { useEffect, useRef, useState } from "react";
import type { TypeNavbarSection } from "../../types/types";
// import './assistMenu.css';
import '../../styles/color.css';

function AssistMenu() {
  const [position, setPosition] = useState({x: 50, y: 50});
  const [isDragging, setIsDragging] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const isTouching = useRef(false);
  const buttonRef = useRef<HTMLDivElement | null>(null);
  const offset = useRef({x: 0, y: 0});
  
  const [navData, setNavData] = useState<TypeNavbarSection[]>();

  const handleMouseDown = (e : React.MouseEvent) => {
    setIsDragging(true);
    setHasMoved(false)
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  }

  const handleMouseMove = (e : MouseEvent) => {
    if (isDragging) {
      setHasMoved(true);
      updatePosition(e.clientX, e.clientY);
    }
  }

  const handleMouseUp = () => {
    if (hasMoved) setHasMoved(false);
    setIsDragging(false);
  }

  const handleTouchStart = (e : React.TouchEvent) => {
    if (buttonRef.current && buttonRef.current.contains(e.target as Node)) {
      isTouching.current = true;
      setHasMoved(false);

      const touch = e.touches[0];

      offset.current = {
        x: touch.clientX - position.x,
        y: touch.clientY - position.y
      };
    }
  }

  const handleTouchMove = (e : TouchEvent) => {
    if (!isTouching.current) return;

    const touch = e.touches[0];
    setHasMoved(true);
    updatePosition(touch.clientX, touch.clientY);
    
    e.preventDefault();
  }

  const handleTouchEnd = () => {
    setHasMoved(false);
    isTouching.current = false;
  }


  const updatePosition = (x: number, y: number) => {
    const buttonWidth = buttonRef.current?.offsetWidth || 60;
    const buttonHeight = buttonRef.current?.offsetHeight || 60;
    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    let newX = x - offset.current.x;
    let newY = y - offset.current.y;

    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    setPosition({x: newX, y: newY});
  }
  
  useEffect(() => {
    fetch("/data/contents.json")
      .then(response => response.json())
      .then(fetchedData => setNavData(fetchedData.sections))
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, {passive: false});
      document.addEventListener('touchend', handleTouchEnd);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }
  }, [isDragging]);

  return (
    <div
      ref={buttonRef}
      onTouchStart={handleTouchStart}
      onMouseDown={handleMouseDown}
      style={{
        left: position.x, 
        top: position.y,
        position: "fixed",
        cursor: "grab",
        zIndex: "9999"
      }}
    >
      <button
        className="c-button btn rounded-pill btn-dark"
        onClick={() => {
          if (!hasMoved) {
            setMenuOpen(!menuOpen)}
          }}
      >
        Menu
      </button>
      <div className="my-1">
        <ul className="list-group">
          {menuOpen && (
            navData && navData?.map((item, index) => (
                <li
                  key={index} 
                  className="list-group-item"
                >
                  <a 
                    href={"#"+item.href}
                    className="text-decoration-none"
                  >
                    {item.name}
                  </a>
                </li>
          
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default AssistMenu;