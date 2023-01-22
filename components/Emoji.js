const Emoji = ({ symbol }) => {
  return (
    <span className="emoji" role="img">
      {symbol}
    </span>
  );
};

export default Emoji;
