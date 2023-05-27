import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="text-center py-10 w-10/12 mx-auto">
            <div className="py-5">
                <h2 className="font-bold text-teal-600 text-3xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p className="font-semibold text-xl">A refresh token just helps you re-validate a user without them having to <br /> re-enter their login credentials multiple times. The access token is re-issued, <br /> provided the refresh token is a valid one requesting permission to access confidential resources.</p>
            </div>
            <div className="py-5">
                <h2 className="font-bold text-teal-600 text-3xl">Compare SQL and NoSQL databases?</h2>
                <p className="font-semibold text-xl">SQL databases are vertically scalable, while NoSQL databases are horizontally <br /> scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, <br /> or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className="py-5">
                <h2 className="font-bold text-teal-600 text-3xl">What is express js? What is Nest JS</h2>
                <p className="font-semibold text-xl">Express is a minimalist and flexible framework that is easy to use and has a large community of developers. <br /> NestJS, on the other hand, is a newer framework that provides additional <br /> features such as dependency injection, a modular architecture, and an intuitive CLI.</p>
            </div>
            <div className="py-5">
                <h2 className="font-bold text-teal-600 text-3xl">What is MongoDB aggregate and how does it work </h2>
                <p className="font-semibold text-xl">What is Aggregation in MongoDB? Aggregation is a way of processing a large number <br /> of documents in a collection by means of passing them through different stages. </p>
            </div>
        </div>
    );
};

export default Blog;