import Swal from "sweetalert2";


  export function fireSwal(details, confirmButtonText, func) {
    Swal.fire({
        title: "متأكد من حذف اتلعميل",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        func();
      } else if (result.isDenied) {
        Swal.fire("Changes are not Saved", "", "info");
      }
    });
  }