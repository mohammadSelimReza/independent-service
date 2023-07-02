

const Blog = () => {
  const blogData = [
    {
      id: 'q1',
      title: "13.1 Difference between authorization and authentication",
      ans: "answered"
    },
    {
      id: 'q2',
      title: "13.2 Why are you using firebase? What other options do you have to implement authentication?",
      ans: "answered"
    },
    {
      id: 'q3',
      title: "13.3 What other services does firebase provide other than authentication",
      ans: "answered"
    },
  ]
  return (
    <div>
      {
        blogData.map(d=> (<div key={d.id} >
          <details className="collapse bg-base-200">
        <summary className="collapse-title text-xl font-medium">{d.title}</summary>
        <div className="collapse-content"> 
          <p>{d.ans}</p>
        </div>
      </details>
        </div>))
      }
      
    </div>
  );
};

export default Blog;
