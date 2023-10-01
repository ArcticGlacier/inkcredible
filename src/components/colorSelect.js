import "./colorSelect.css";

export default function ColorSelect(color) {
  let hexCode = color.color;
  console.log(hexCode);

  return (
    <div className="palette">
      <button
        className="colorCircle"
        style={{
          backgroundColor: `${hexCode}`,
        }}
      ></button>
    </div>
  );
}
