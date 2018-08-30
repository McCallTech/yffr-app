export default ({children, href}) => {
  const style = {
    cusrsor: 'pointer'
  };

  const changeHash = () => {
    window.location.href = href;
  }

  return (
    <span onClick={changeHash} style={style}>
      {children}
    </span>
  );
}