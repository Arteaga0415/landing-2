export function Video() {
  return (
    <section className="overflow-hidden pb-10 pt-35 md:pt-40 xl:pb-15 xl:pt-46">
      <video width="320" height="240" loop autoPlay muted preload="none">
        <source src="/videos/solar-panels-1.mp4" type="video/mp4" />
        {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        Your browser does not support the video tag.
      </video>
    </section>
  )
}