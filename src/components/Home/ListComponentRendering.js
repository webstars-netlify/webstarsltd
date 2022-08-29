import React from "react"

import GlobalAudience from "./GlobalAudience"
import EnvelopeSection from "./EnvelopeSection"

const ListComponentRendering = ({ blok, slug }) => {
  return (
    <>
      {blok.project_display[0].component === "Envelope Section" ? (
        <EnvelopeSection component={blok.project_display[0]} slug={slug} />
      ) : (
        <GlobalAudience component={blok.project_display[0]} slug={slug} />
      )}
    </>
  )
}

export default ListComponentRendering
