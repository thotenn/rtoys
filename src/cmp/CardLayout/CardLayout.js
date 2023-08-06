import React from 'react';
import "./index.css";

export const CardLayout = () => {
    return (
        <>
            <div class="wrapper" data-for="article">
                <article class="card">
                    <img src="https://picsum.photos/300/200?random=2" alt="" />
                        <div class="card__content">
                            <h2>Some Article</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore at fugiat amet necessitatibus culpa tenetur dignissimos?</p>
                            <div class="card__actions">
                                <button class="button">
                                    <span class="button__text">
                                        Add<span class="button__text button__text--supplementary">&nbsp;to list</span>
                                    </span>
                                    <span class="button__icon material-symbols-outlined">bookmark_add</span>
                                </button>
                                <button class="button">
                                    <span class="button__text">
                                        Read<span class="button__text button__text--supplementary">&nbsp;now</span>
                                    </span>
                                    <span class="button__icon material-symbols-outlined">import_contacts</span>
                                </button>
                            </div>
                        </div>
                </article>
            </div>
            <div class="wrapper" data-for="button">
                <button class="button">
                    <span class="button__text">
                        Add<span class="button__text button__text--supplementary">&nbsp;to list</span>
                    </span>
                    <span class="button__icon material-symbols-outlined">bookmark_add</span>
                </button>
            </div>
        </>
    )
}
