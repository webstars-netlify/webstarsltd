import React from "react"

const Categories = () => {
  return (
    <section class="innerBanner">
      <div class="container">
        <div class="insights-Banner">
          <div class="row">
            <div class="col-md-2">
              <div class="insights-Banner-cont">
                <h6>Insight Categories</h6>
              </div>
            </div>

            <div class="col-md-10">
              <div class="insights-Banner-btn">
                <ul>
                  <li class="current" data-targetit="box-c1">
                    <a href="#">Category</a>
                  </li>
                  <li data-targetit="box-c2">
                    <a href="#">Category Two</a>
                  </li>
                  <li data-targetit="box-c3">
                    <a href="#">Category Three</a>
                  </li>
                  <li data-targetit="box-c4">
                    <a href="#">Category four</a>
                  </li>
                  <li data-targetit="box-c5">
                    <a href="#">Category five</a>
                  </li>
                  <li data-targetit="box-c6">
                    <a href="#">Category six</a>
                  </li>
                  <li data-targetit="box-c7">
                    <a href="#">Category seven</a>
                  </li>
                  <li data-targetit="box-c8">
                    <a href="#">Category eight</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
