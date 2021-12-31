import './Paragraph.css';

function Paragraph({title, content}) {
    return (
    <section>
        <h4>{title}</h4>
        <p>{content}</p>
     </section>
    );
  }
  
  export default Paragraph;