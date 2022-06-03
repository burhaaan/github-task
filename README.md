This app uses redux for state management, the state is never mutated directly. This was a requirement for this project. Some of the other high level decisions and the reasoning behind them is mentioned below:

Infinite scrolling:
Infinite scrolling was implemented using react-infinite-scroll-component. It uses a function called fetchMoreData to fetch more results once the user has scrolled to the bottom. The dataLength property on this component is a tricky one as it should not be the length of entire data but the total number of items on that page currently.

Responsiveness:
To achieve the objective of 2 columns on smaller screen sizes of width <=768 px, ant design grid native props have been used, the grid size “sm” implies width <=768 px where split the columns into two (of 12 size each). For “md” grid size (>768px) we split the columns into three (of 8 size each).

Alignment:
UI is shown in the middle of the screen when there is no search query and is moved to the top right when any search query is entered. This is achieved by making separate columns for each ui element and wrapping them with a row. Align and justify properties are set based on the length of the search query.

Debounce:
App uses debounce (imported from lodash) to delay the fetching of data based on input, a delay of 1000ms is added.

Redux Persist:
The data is cached in the store and persisted via redux-persist and no more API calls are made if we already have the results for the search term. It uses localStorage under the hood to cache the data.
