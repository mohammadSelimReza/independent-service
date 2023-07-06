const Blog = () => {
  const blogData = [
    {
      id: "q1",
      title: "13.1 Difference between authorization and authentication",
      ans: "Authentication verifies the identity of a user or entity, ensuring they are who they claim to be but Authorization determines what actions or resources a user is allowed to access or perform based on their authenticated identity.Authentication focuses on verifying identity, ensuring the user is legitimate and not an imposter but Authorization focuses on determining the user's privileges or permissions and what they are allowed to do within the system.Authentication establishes trust and confirms the identity of the user to grant access to the system but Authorization controls access rights and permissions to specific resources or functionalities based on the authenticated identity.",
    },
    {
      id: "q2",
      title:
        "13.2 Why are you using firebase? What other options do you have to implement authentication?",
      ans: "Firebase is a widely used platform provided by Google that offers a suite of cloud-based services and tools for building and managing web and mobile applications.Its easy to use and very simple. OAuth/OpenID,Identity Providers,Auth0 etc are the alternative of firebase",
    },
    {
      id: "q3",
      title:
        "13.3 What other services does firebase provide other than authentication",
      ans: "Realtime Database,Cloud Messaging,Crashlytics,Performance Monitoring etc",
    },
  ];
  return (
    <div className="h-screen">
      <h3 className="text-center">
        Click over the questions to see the answer.
      </h3>
      {blogData.map((d) => (
        <div key={d.id}>
          <details className="collapse bg-base-200">
            <summary className="collapse-title text-xl font-medium">
              {d.title}
            </summary>
            <div className="collapse-content">
              <p>{d.ans}</p>
            </div>
          </details>
        </div>
      ))}
    </div>
  );
};

export default Blog;
