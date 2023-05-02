function ListItem({ item }) {
    return (
        <div className="item" key={item.pageid}>
            <div className="right floated content">
                <a
                    href={`https://en.wikipedia.org?curid=${item.pageid}`}
                    className="ui button"
                >
                    Go
                </a>
            </div>
            <div className="content">
                <div className="header">{item.title}</div>
                <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
            </div>
        </div>
    );
}

export default ListItem;
