import './Skills.css';

export const Skills = () => {
  return (
    <div className="skillsContainer">
      <div className="scroll" style={{'--time': '15s'}}>
        <ul className="tagList scroller__inner">
          <li className="specItem">HTML</li>
          <li className="specItem">CSS</li>
          <li className="specItem">JS</li>
          <li className="specItem">webdev</li>
          <li className="specItem">UX/UI</li>
          <li className="specItem">fullstack</li>
          <li className="specItem">TS</li>
          <li className="specItem">REACT</li>
        </ul>
        <ul className="tagList scroller__inner">
          <li className="specItem">HTML</li>
          <li className="specItem">CSS</li>
          <li className="specItem">JS</li>
          <li className="specItem">webdev</li>
          <li className="specItem">UX/UI</li>
          <li className="specItem">fullstack</li>
          <li className="specItem">TS</li>
          <li className="specItem">REACT</li>
        </ul>
      </div>
    </div>
  );
};
