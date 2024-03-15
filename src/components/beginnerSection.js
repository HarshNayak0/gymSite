import anatomy from "./anatomy.jpg";

export default function BeginnerSection() {
  return (
    <>
      <h3 className="blog-header">Intro</h3>
      <div className="blog-body">
        This program is perfect for people of all shapes and sizes that want to
        learn what it’s like to strength train effectively based on scientific
        evidence. Throughout this program, it's crucial not to rush through the
        exercises but instead prioritize maintaining optimal form. Focus on
        contracting your muscles explosively during the concentric phase and
        relaxing them slowly during the eccentric phase. Exercises can be easily
        substituted based on availability.
      </div>
      <h3 className="blog-header">Understanding the Terminology</h3>
      <div className="blog-body">
        <ul className="terminology">
          <li>
            <span className="concept">Concentric Phase: </span> This refers to
            the range of motion (ROM) where the muscle contracts against
            resistance.
          </li>
          <li>
            <span className="concept">Eccentric Phase: </span> This is the ROM
            where the muscle relaxes while under resistance.
          </li>
          <li>
            <span className="concept">Mind-Muscle Connection: </span> It
            involves consciously engaging a specific muscle during exercise.
          </li>
          <li>
            <span className="concept">Time under Tension: </span> This is a
            crucial factor triggering muscle growth, emphasizing the duration
            muscles are under strain during an exercise.
          </li>
          <li>
            <span className="concept">Stability: </span> This measures the
            effort required from muscles to stabilize resistance. Lower
            stability demands necessitate greater muscle engagement to stabilize
            the weight, diverting effort from moving it.
          </li>
          <li>
            <span className="concept">Mental Cue: </span> Some exercises below
            with have some mental cues that will help optimize proper muscle
            engagement. It refers to a specific thing or “cue” to consciously
            think about during the exercise that ensures that the targeted
            muscles are properly engaged.
          </li>
        </ul>
      </div>
      <img className="anatomy-chart" src={anatomy} alt="anatomy-chart" />
      <div className="blog-body">
        Don’t worry too much about targeting specific muscles within each muscle
        group as most beginner level exercises target all muscles within its
        muscle group.
      </div>
      <h3 className="blog-header">Key Factors to Enhance Muscle Growth</h3>
      <div className="blog-body">
        Recent research highlights specific factors influencing optimal muscle
        growth, notably Range of Motion (ROM) and repetition tempo (Korakakis
        et. al., 2023). For simplicity, we'll focus solely on these two
        elements.
      </div>
      <ul>
        <li>
          <span className="concept">Range of Motion (ROM): </span> Maximizing
          ROM ensures optimal muscle contraction and fosters a strong
          mind-muscle connection. It involves allowing muscles to fully relax
          and lengthen before initiating the next repetition. Certain exercises,
          like cable lateral raises, benefit from the resistance being at a
          position where the muscle is most stretched, emphasizing the
          importance of optimizing stretch during movements.
        </li>
        <li>
          <span className="concept">Repetition Tempo: </span> Repetition tempo
          refers to the speed at which each repetition is performed,
          specifically the concentric (contracting) and eccentric (relaxing)
          phases. Aim for a controlled tempo, with a 1-2 second concentric phase
          followed by at least a 3-second eccentric phase. This tempo maximizes
          time under tension on the muscle, a critical stimulus for growth.
        </li>
      </ul>
      <h3 className="blog-header">
        Initial Focus: Habit Formation and Consistency
      </h3>
      <div className="blog-body">
        While various training concepts exist based on extensive research,
        forming sustainable habits is paramount at the outset. Prioritize
        strategies that prevent burnout, injury, and excess fatigue, ensuring
        consistent gym attendance. Remember, adherence to a chosen training
        philosophy is key, as long as it aligns with your goals and preferences.
        Consistent progression is achievable through continuous effort and
        pushing beyond perceived limits.
      </div>
      <h3 className="blog-header">
        Recommended Beginner-Friendly Training Split
      </h3>
      <div className="blog-body">
        For beginners, a Push, Pull, Legs x2 (PPL, rest, PPL, rest) split offers
        a structured approach to training. Each session targets all major muscle
        groups evenly, promoting balanced development. In contrast, an Upper,
        Lower x2 (UL, rest, UL, rest) split may lead to inconsistencies in
        programming, with variable focus on different muscle groups over time.
      </div>
      <h3 className="blog-header">Consideration of Stability in Exercises</h3>
      <div className="blog-body">
        Most exercises in the recommended training split involve machines with
        fixed bar/handle paths. This deliberate choice is grounded in exercise
        fundamentals, ensuring stability and safety during movements. By
        adopting these principles, beginners can lay a solid foundation for
        their fitness journey, optimizing training effectiveness and promoting
        long-term progress.
      </div>
      <div className="blog-body">That being said, here is the workout: </div>
    </>
  );
}
