

const EmbeddedForm: React.FC = () => {
    return (
      <div className="iframe-container">
        <iframe
          width="600"
          height="850"
        //   10.0.0.29
          src="https://10.0.0.29:7890/forms/wtl/04404975310405047f0f36cd6865bd58"
          frameBorder="0"
          sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups"
          allowFullScreen
          title="Embedded CRM Form"
        ></iframe>
      </div>
    );
  };
  
  export default EmbeddedForm;