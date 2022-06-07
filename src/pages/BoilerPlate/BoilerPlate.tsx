import { RootState } from "@store/slices";
import boilerPlateSlice from "@store/slices/boilerPlateSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BoilerPlate() {
  const boilerPlateState = useSelector(
    (state: RootState) => state.boilerPlate.boilerPlate
  );
  const dispatch = useDispatch();

  console.log(boilerPlateState, "boilerPlateState");

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>boilerPlate</h2>
      <button onClick={() => dispatch(boilerPlateSlice.actions.boilerPlate())}>
        boilerPlateDispatch
      </button>
    </main>
  );
}
