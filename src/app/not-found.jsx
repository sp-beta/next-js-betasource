import CommonButton from "@/components/commonbutton";
function NotFound() {
  return (
    <div class="container-fluid header bg-white breadcumb-area d-flex align-items-center justify-content-center errorpage">
      <div class="row text-center">
        <div class="col-12">
          <h1 class="text-white">404</h1>
          <h3 class="text-white">Page Not Found</h3>
        </div>
        <div class="col-12 py-3">
          <span class="text-white">
            We're sorry, the page your requested could not be found. <br />
            Please go back to the Homepage.
          </span>
          <CommonButton text="Go Home" />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
