class AutoPause {
    run(player) {
        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold : 0.25
        })

        observer.observe(player.media);
    }

    handleIntersection(entries) {
        const entry = entries[0];
        console.log(entry);
    }
}

export default AutoPause;