import './style.css';

const Button=({ text, handleClick, customClasses, disabled, theme })=>{
    let classesStr = "button";
    classesStr += " " + customClasses;
    theme && (classesStr += " " + theme);
    disabled && (classesStr += " disabled");
    return(
      <div className={classesStr} onClick={handleClick}>{text}</div>
    )
  }

  export default Button;