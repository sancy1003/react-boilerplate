import { RootState } from "@store/slices";
import userSlice from "@store/slices/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BoilerPlate() {
  const { userAge, userName } = useSelector((state: RootState) => state.user);
  const { loading } = useSelector((state: RootState) => state.loading);
  const getUserNameLoading = loading[userSlice.actions.getUserName.type];
  const getUserAgeLoading = loading[userSlice.actions.getUserAge.type];
  const dispatch = useDispatch();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>User</h2>
      <button
        type="button"
        onClick={() => dispatch(userSlice.actions.getUserName())}
      >
        getUserName
      </button>
      <button
        type="button"
        onClick={() => dispatch(userSlice.actions.getUserAge())}
      >
        getUserAge
      </button>
      {getUserNameLoading ? (
        <div>유저 이름 로딩 중</div>
      ) : (
        <div>{userName}</div>
      )}
      {getUserAgeLoading ? <div>유저 나이 로딩 중</div> : <div>{userAge}</div>}
    </main>
  );
}
