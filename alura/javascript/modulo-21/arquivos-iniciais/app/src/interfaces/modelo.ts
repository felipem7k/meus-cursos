import { Imprimivel } from "../utils/imprimivel.js";
import Comparavel from "./comparavel.js";

export default interface Modelo<T> extends Comparavel<T>, Imprimivel {
}