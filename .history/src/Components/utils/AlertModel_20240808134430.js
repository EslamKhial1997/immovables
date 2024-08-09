import Swal from "sweetalert2";


  export function fireSwal(details, confirmButtonText, func) {
    Swal.fire({
      title: details,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText,
      denyButtonText: `Don't ${confirmButtonText}`,
    }).then((result) => {
      if (result.isConfirmed) {
        func();
      } else if (result.isDenied) {
        Swal.fire("Changes are not Saved", "", "info");
      }
    });
  }