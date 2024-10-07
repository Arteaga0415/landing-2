

const EmbeddedForm: React.FC = () => {
    return (
      <section className="flex justify-center b-20 px-4 md:px-8 2xl:px-0" >
        <div className="iframe-container">
          <iframe
            width="100%"
            height="850"
          //   10.0.0.29
            src="https://10.0.0.29:7890/forms/wtl/04404975310405047f0f36cd6865bd58"
            frameBorder="0"
            sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
            allowFullScreen
            title="Embedded CRM Form"
          ></iframe>
        </div>
      </section>
    );
  };
  
  export default EmbeddedForm;