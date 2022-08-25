const MultiRangeSlider = () => {
  return (
    <>
      <input
        type="range"
        min="0"
        max="1000"
        className="thumb thumb--zindex-3"
      />
      <input
        type="range"
        min="0"
        max="1000"
        className="thumb thumb--zindex-4"
      />
    </>
  );
};

export default MultiRangeSlider;
