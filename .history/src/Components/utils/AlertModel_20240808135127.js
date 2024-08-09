import Swal from "sweetalert2";


  export function fireSwal() {
    Swal.fire({
        title: "متأكد من حذف العميل ؟",
        text: "لن تتمكن من التراجع عن هذا!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "نعم"
        confirmButtonText: "نعم"
    }).then((result) => {
    //   if (result.isConfirmed) {
    //     func();
    //   } else if (result.isDenied) {
    //     Swal.fire("لم يتم حذف التعديلات", "", "ملحوظه");
    //   }
    if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "تم الحذف بنجاح",
          icon: "success"
        });
      }
    });
  }