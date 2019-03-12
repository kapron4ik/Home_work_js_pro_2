

document.addEventListener('DOMContentLoaded', () => {

    const Feed = [];
    class Post {
        constructor({company, about} ){
            this.id = Math.random()*10000;
            this.title = company;
            this.text = about;
            this.likes = 0;
            this.dislikes = 0;
            this.addLike = this.addLike.bind(this);
            this.addDislike = this.addDislike.bind(this);

            Feed.push( this );
        }

        addLike() {
            console.log( this );
            this.likes++;

            this.render();
            // let node = document.querySelector(`.node[data-id="${this.id}"] > button`);
            // node.innerText = `Like! (${this.likes})`;
        }

        addDislike(){
            this.dislikes++;
            this.render();
        }

        render(){
            const nodeInDom = document.querySelector(`.node[data-id="${this.id}`);
            const target = document.getElementById('target');
            let node;

            if( nodeInDom !== null ){
                node = nodeInDom;
            } else {
                node = document.createElement('div');
            }

            node.innerHTML = `
                <div class="node" data-id="${this.id}">
                    <h2>${this.title}</h2>
                    <p>
                        ${this.text}
                    </p>
                    <button class="like_btn"> Like! ${this.likes} </button>
                    <button class="dislike_btn"> Dislike! ${this.dislikes} </button>
                </div>
            `;

            let like_btn = node.querySelector('.like_btn');
            let dislike_btn = node.querySelector('.dislike_btn');
            like_btn.onclick = this.addLike;
            dislike_btn.onclick = this.addDislike;


            if( nodeInDom === null ){
                target.appendChild( node );
            }
            
        }

    }


    class Advertisment extends Post {
        constructor(  title, text ){
            super(  title, text );
            console.log( this );
        }
        addDislike(){
            this.likes++;
            this.render();
        }
        render(){
            const nodeInDom = document.querySelector(`.node[data-id="${this.id}`);
            const target = document.getElementById('target');

            let node;
            if( nodeInDom !== null ){
                node = nodeInDom;
            } else {
                node = document.createElement('div');
            }

            node.innerHTML = `
                <div class="node" data-id="${this.id}">
                    <h1> I'M ADVERTISMENT </h1>
                    <button class="like_btn"> Like! ${this.likes} </button>
                    <button class="dislike_btn"> Dislike! ${this.dislikes} </button>
                </div>
            `;

            let like_btn = node.querySelector('.like_btn');
            like_btn.onclick = this.addLike;

            let dislike_btn = node.querySelector('.dislike_btn');
            dislike_btn.onclick = this.addDislike;

            if( nodeInDom === null ){
                target.appendChild( node );
            }

        }

    }



    new Post('Hello', 'Hello world');
    new Post('Foo', 'Woogoo');
    new Advertisment('Cola-Cola', '123');

    console.log( 'feed', Feed );


    fetch('http://www.json-generator.com/api/json/get/cebcaXHYia?indent=2')
        .then( res => res.json() )
        .then( data => {
            console.log( data );

          let x =  data.map(( item ) => {
            new Post( item ).render();
            });

            console.log(x)


        })



    // Feed.map( item => item.render() );
})