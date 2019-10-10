import ListaRegali from "readme";
import Budget from "budget";


for (var regalo of ListaRegali) {
  if (regalo.tick === True && regalo.costo <= Budget.soglia){
    console.log("A ML e DP regaliamo un bel", regalo);
  }
}
