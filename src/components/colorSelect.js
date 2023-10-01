import "./colorSelect.css";

export default function ColorSelect(props) {
  let hexCode = props.color;

  return (
    <div className="palette">
      <button
        className="colorCircle"
        style={{
          backgroundColor: `${hexCode}`,
        }}
        onClick={() => props.colorSelected(hexCode)}
      ></button>
    </div>
  );
}
