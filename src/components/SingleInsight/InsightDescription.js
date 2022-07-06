import React from "react"

import User from "../../assets/images/insight/u1.png"

const InsightDescription = () => {
  return (
    <section class="singleInsightSection2">
      <div class="custom-container">
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="singleInsightSec1-profile">
              <div class="singleInsightSec1-profile-img">
                <img src={User} alt="" />
              </div>

              <h6>By Beatrice Aragone</h6>
              <p>4th March 2021</p>

              <a href="#">ShareThis</a>
            </div>
          </div>

          <div class="col-lg-8 col-md-8 col-sm-12">
            <div class="singleInsightSec1-cont">
              <h6>
                <span className="d-block">Social media is an</span> important
                part of any digital marketing strategy - and for B2B marketers,
                LinkedIn is especially crucial.
              </h6>

              <p>
                Unlike channels like Facebook and Instagram, users on LinkedIn
                are more likely to be in ‘business mode’, and therefore more
                receptive to your B2B marketing messaging - and considering
                that, according to a study by LinkedIn, 4 out of 5 LinkedIn
                members drive business decisions, it’s no wonder that LinkedIn
                is such a popular (and effective!) sales and marketing channel.
              </p>

              <p>
                LinkedIn offers a number of useful features for B2B marketers,
                such as the LinkedIn Ads platform and product pages. However,
                Sales Navigator dives deeper into LinkedIn’s B2B marketing
                capabilities, and can even be used to support an Account Based
                Marketing strategy.
              </p>

              <p>
                Sales Navigator: Everything you need to know LinkedIn is often
                used to prospect and generate leads… but Sales Navigator
                streamlines and simplifies this process, allowing users to find
                individuals and businesses that meet their exact sales and
                marketing needs.
              </p>

              <p>
                Sales Navigator’s biggest strength is its highly specific
                advanced search function, allowing you to filter leads and
                accounts by a number of different criteria. Aside from the usual
                filters like industry, company size, geographic location, and
                job title/function, Sales Navigator can also filter leads by
                years at the company/position, group membership, keywords in
                content they’ve posted, and more. In terms of accounts, some of
                the most useful filters include company/department headcount
                growth, job opportunities, and technologies used.Your lead and
                account searches can be saved and stored in your Sales
                Navigator, and you’ll be able to set daily/weekly/monthly alerts
                that notify you of any changes to these searches, allowing you
                to immediately spot new opportunities.
              </p>

              <p>
                By adding ‘seats’ to your Sales Navigator account, you can
                collaborate with other team members to create prospect lists and
                manage InMail and Smart Links engagements from leads - ideal for
                aligning sales and marketing teams.
              </p>

              <p>
                At its core, Sales Navigator is a great tool for business
                research, useful for sales and marketing activities both within
                the LinkedIn platform and outside of it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InsightDescription
