function App() {
    const title = "My first day with React.js";
    const body = "I learned about JSX syntax & using JSX conditionals"
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'}
    ]
    return (
        <div className="comments">
            <h3>Comments({comments.length})</h3>
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>{comment.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default App()