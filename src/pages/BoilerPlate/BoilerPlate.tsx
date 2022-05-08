import { RootState } from "@store/reducers";
import { boilerPlateTest } from "@store/reducers/boilerPlateReducer";
import store from "@store/store";
import { useDispatch, useSelector } from "react-redux";

export default function BoilerPlate() {
  const boilerPlateState = useSelector<any>((state) => state.boilerPlate);
  const dispatch = useDispatch();

  if (boilerPlateState) console.log(boilerPlateState, "boilerPlateState");
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>boilerPlate</h2>
      <button onClick={() => dispatch(boilerPlateTest("test"))}>
        boilerPlateDispatch
      </button>
    </main>
  );
}
