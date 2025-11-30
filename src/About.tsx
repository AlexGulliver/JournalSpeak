// About Page

export default function About() {
    return (
      <div className="flex items-center justify-center bg-gray-300 h-180">
        <div className="p-2 bg-gray shadow-lg rounded-lg text-center w-240">
        <h4 className="text-3xl font-bold text-gray-800 mb-2">JournalSpeak</h4>
          <p className="text-lg text-gray-600">
            <h5>NB: This website has not been endorsed by Nicole Sachs, the creator of JournalSpeak. For </h5>
            <br />
            <i>"JournalSpeak is a form of targeted self-expression specifically designed to get to the heart of your repressed emotions" -  Sachs, Nicole J. Mind Your Body: A Revolutionary Programme to Release Chronic Pain and Anxiety </i>
            <br />
            <br />

            JournalSpeak is a journalling practice created by Nicole Sachs to help release emotion and trauma, particularly for people with chronic pain.
            
            JournalSpeak involves a 20 minute writing exercise followed by a 10 minute mindfulness session.

            This website facilitates JournalSpeak sessions. No writing is stored as it is critical users can write with complete honesty about their feelings which may be misinterpreted by others and may not represent their grounded opinions.
          </p>
          <br />
          <h4 className="text-3xl font-bold text-gray-800 mb-2">Writing</h4>
          <p className="text-lg text-gray-600">
            JournalSpeak begins with <b>20 minutes</b> of writing.
          </p>
          <br />
          <h4 className="text-3xl font-bold text-gray-800 mb-2">Mindfulness</h4>
          <p className="text-lg text-gray-600">
            The mindfulness session lasts <b>10 minutes</b> allowing you to ground yourself following emotional release. You could try guided meditation, breathwork or simply just being present.
          </p>
          <br />
          <h4 className="text-3xl font-bold text-gray-800 mb-2">Useful Links</h4>
          <p className="text-lg text-gray-600">
            <a href="https://www.yourbreakawake.com/" target="_blank">Nicole Sachs' Website</a>
            <br />
            <a href="https://www.youtube.com/@thecureforchronicpain/featured" target="_blank">Nicole Sachs' Youtube</a>
            <br />
            <a href="https://www.youtube.com/watch?v=H1K9wWzgnlA" target="_blank">JournalSpeak Video</a>
          </p>
        </div>
      </div>
    );
  }