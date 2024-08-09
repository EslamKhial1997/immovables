import Swal from "sweetalert2";


  export function fireSwal(details, confirmButtonText, func) {
    Swal.fire({
        title: "متأكد من حذف العميل ؟",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم"
    }).then((result) => {
      if (result.isConfirmed) {
        func();
      } else if (result.isDenied) {
        Swal.fire("لم يتم حذف التعديلات", "", "ملح");
      }
    });
  }