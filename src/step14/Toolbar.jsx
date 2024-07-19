const styles = {
  wrapper: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey",
  },
  greeting: { marginRight: 8 },
};

export const Toolbar = (props) => {
  const { isLoggedIn, onClickLogin, onClickLogout } = props;
  return (
    <div style={styles.wrapper}>
      {isLoggedIn && (
        <span style={styles.greeting}>당신은 행운의 편지를 발견했습니다!</span>
      )}

      {isLoggedIn ? (
        <button onClick={onClickLogout}>닫기</button>
      ) : (
        <button onClick={onClickLogin}>열기</button>
      )}
    </div>
  );
};
