import React, {Fragment} from "react";
import {connect} from "react-redux"
import {createPost} from "../redux/actions/actions"

const mapToPropse = (state) => {
    return {
        state: state
    }
};

const mapDispatchToProps = {
    createPost
};


class PostForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ""
        }
    }


    submitHandler = (e) => {
        e.preventDefault();
        const {title} = this.state;

        // для пустой строки пост не создается
        if (!title.trim()) { // trim - очищает от пробелов
            return
        }

        // создаем новый пост, и передаем его через экшн в глобальный стейт
        const newPost = {
            title,
            id: Date.now().toString()
        };
        this.props.createPost(newPost);  // вызываем экшн
        this.setState({title: ''}) // очистка строки в input

    };

    inputChangeHandler = (e) => {
        e.persist();
        // объединяем стeйт с измененным стейтом
        this.setState(prev => ({ // если надо вернуть объект то оборачиваем в круглые скобки
                ...prev, ...{
                    [e.target.name]: e.target.value
                }
            }),

            // здесь выполнится колбэк который вызывается после исполнения SET_STATE")
            // ()=>{}
        )
    };

    ttt = ({news}) => {
        console.log(news)
    }


    render() {
        // this.ttt()
        return (
            <form onSubmit={this.submitHandler} className="pb-1">
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Загоговок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        value={this.state.title}
                        name="title"
                        onChange={this.inputChangeHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
                <hr/>
            </form>
        )
    }
}


export default connect(mapToPropse, mapDispatchToProps)(PostForm)
// // или так:
// export default connect(null, {createPost})(PostForm)
