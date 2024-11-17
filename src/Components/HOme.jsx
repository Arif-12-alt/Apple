import React from 'react'
import "./HOme.css"

const HOme = () => {
  return (
    <div className='container-fluid width=100%'>
       <div >
      <marquee direction="right"><img src="https://www.pngkey.com/png/full/24-241942_apple-ipad-logo-png-download-apple-logo-with.png" height="55px" />
      </marquee>
    </div>
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className=""
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"
          className=""></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"
          className="active" aria-current="true"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://miro.medium.com/v2/da:true/resize:fit:1200/0*9v9QN-eYgCJnKGMa" height="600px" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Apple</h5>
            <p>
               Terms apply. Services: Apple Trade In, Shop with Specialists, Free delivery, No Cost EMI available.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://m.komorkomania.pl/iphone-2020-17adb270a57dbe40eefb.jpg" height="600px" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>IPhone 15 Pro Max</h5>
            <p>
              iPhone 15 Pro Max has a strong and light aerospace-grade
              titanium design.
            </p>
          </div>
        </div>
        <div className="carousel-item ">
          <img src="https://images.frandroid.com/wp-content/uploads/2022/03/ios-android.jpg" height="600px" className="d-block w-100"
            alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>IPhone 14 Pro Max</h5>
            <p>
              Phone 14 Pro Max. Capture incredible detail with a 48MP Main
              camera.
            </p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    <br />
    <div className="container">
      <div className="row">
        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="1500">
          <div className="card">
            <img src="https://imageio.forbes.com/specials-images/imageserve/62693273061db6040224e08a/0x0.jpg?format=jpg&crop=1337,753,x0,y502,safe&width=1200" height="180px" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">IPhone 14 Pro Max</h5>
              <p className="card-text">
                The iPhone 14 and iPhone 14 Plus have an identical design to
                the iPhone 13, although the US models lack a physical SIM
                tray.
              </p>
              <a href="http://127.0.0.1:5500/project.html#" className="btn btn-primary">For more...</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="2000">
          <div className="card">
            <img src="https://i.blogs.es/e511e9/iphone-12/1366_2000.jpg " height="220px" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">IPhone 15</h5>
              <p className="card-text">
                The iPhone 15 is the first major redesign since the iPhone 12,
                featuring rounder edges and slightly curved display and back
                glass.
              </p>
              <a href="http://127.0.0.1:5500/project.html#" className="btn btn-primary">For more...</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="2500">
          <div className="card">
            <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/FiERK3lVEAEGyCO-photoutils.com_.jpeg?ssl=1&quality=80&w=800" height="260px" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">IPhone 15 Pro Max</h5>
              <p className="card-text">
                The iPhone 15 Pro and iPhone 15 Pro Max are smartphones
                designed, developed, and marketed by Apple Inc. They are the
                seventeenth-generation flagship iPhones.
              </p>
              <a href="http://127.0.0.1:5500/project.html#" className="btn btn-primary">For more...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <div className="container">
      <div className="row">
        <div className="col-lg-6 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="2000">
          <div className="card">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwWeeUWGLhwZxlUbebWKH2aJh0ixDmNczKaJv8VWsZVEIUWsfL87wy-icxei8f6Zt6ZoihkzK_uGR2DwT8_URZmyYogklL7QFmJwjgVPeGYq21LEvHalmxripYOF7ufrA98MkRB5inwDc7lClSDMUfUTSHSA_nYvLeK4xe71pcGKugRkKEyLzjeAzuNg/s1280/MacBook%20Pro.jpg" height="290px" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Apple Laptop</h5>
              <a href="http://127.0.0.1:5500/project.html#" className="btn btn-primary">For More...</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="2500">
          <div className="card">
            <img src="https://miro.medium.com/v2/resize:fit:3584/1*tvgO7RzJpxnynrWxj33zog.png"
              height="290px"  className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Apple Computer</h5>
              <a href="http://127.0.0.1:5500/project.html#" className="btn btn-primary">For More...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className="container">
      <div className="row">
        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="1500">
          <div className="card">
            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202210/ipad-sixteen_nine.jpg?VersionId=hGred0jgIvrLVyV8KI6zrdwdfNbCZD_2&size=690:388" height="230px" className="card-img-top"
              alt="..." />
            <div className="card-body">
              <h5 className="card-title">Apple Ipad</h5>
              <a href="http://127.0.0.1:5500/project.html#" className="btn btn-primary">For More...</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="2000">
          <div className="card">
            <img src="https://www.apple.com/newsroom/images/tile-images/Apple_airpods-pro_new-design-102819.jpg.og.jpg?202405161838" height="230px" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Apple Ear-Buds</h5>
              <a href="http://127.0.0.1:5500/project.html#" className="btn btn-primary">For More...</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="2000">
          <div className="card">
            <img src=" https://technplay.com/wp-content/uploads/2023/12/Smartwatch-2023-12-17T132005.193.jpg" height="230px" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Apple Ear-Buds</h5>
              <a href="http://127.0.0.1:5500/project.html#" className="btn btn-primary">For More...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />                               
    <div className="container">
      <div className="row">
        <div className="col-lg-5 aos-init aos-animate" data-aos="zoom-in-right" data-aos-duration="1500">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27443.033542618352!2d76.68762281083984!3d30.707738599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe8ea83c9d5%3A0x504281dfec675572!2sThe%20iMac%20Store%20-%20Apple%20Reseller!5e0!3m2!1sen!2sin!4v1720587066592!5m2!1sen!2sin" width="100%" height="370" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="col-lg-7 aos-init aos-animate" data-aos="zoom-in-left" data-aos-duration="2000">
          <marquee>
            <h3>
              <b>ADDITIONAL 20% CASHBACK ON HDFC CARD</b>
            </h3>
          </marquee>
          <br /><br /><br />
          <form className="row g-3 needs-validation" novalidate="">
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">First name</label>
              <input type="text" className="form-control" id="validationCustom01" required="" />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">Last name</label>
              <input type="text" className="form-control" id="validationCustom02" required="" />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">Username</label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" className="form-control" id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend" required="" />
                <div className="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom03" className="form-label">City</label>
              <input type="text" class="form-control" id="validationCustom03" required="" />
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div className="col-md-3">
              <label for="validationCustom04" class="form-label">State</label>
              <select className="form-select" id="validationCustom04" required="">
                <option selected="" disabled="" value="">Choose...</option>
                <option>Himachal Pradesh</option>
                <option>Punjab</option>
                <option>Hariyana</option>
                <option>Uttar Pradesh</option>
              </select>
              <div className="invalid-feedback">Please select a valid state.</div>
            </div>
            <div className="col-md-3">
              <label for="validationCustom05" className="form-label">Pin</label>
              <input type="text" className="form-control" id="validationCustom05" required="" />
              <div className="invalid-feedback">Please provide a valid pin.</div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required="" />
                <label className="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default HOme
