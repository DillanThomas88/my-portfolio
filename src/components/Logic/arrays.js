export function CapitalizeFirstLetter(x) {
  console.log(
    x.split("")[0].toUpperCase().concat(x.split("").splice(1).join(""))
  );
}
