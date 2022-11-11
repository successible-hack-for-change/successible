import { useEffect, useState } from 'react';
import { Button, Icon } from '@blueprintjs/core';

interface SpeechButtonProps {
  textToSpeak: string;
  alwaysDisplay?: boolean;
  answerButton?: boolean;
}

const SpeechButton = ({
  textToSpeak,
  alwaysDisplay,
  answerButton,
}: SpeechButtonProps): JSX.Element => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  let msg: SpeechSynthesisUtterance | null = null;
  useEffect((): any => {
    const synth = window.speechSynthesis;
    if (!synth) {
      setAudioEnabled(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    msg = new window.SpeechSynthesisUtterance();
    var voices = synth.getVoices();
    msg.voice = voices.filter(function (voice) {
      return voice.name == 'Daniel';
    })[0];
    msg.lang = 'en-US';
    msg.volume = 1;
    msg.rate = 1;
    msg.pitch = 1;
    msg.text = '';
    msg.onstart = function () {
      setIsActive(true);
    };
    msg.onpause = function () {
      setIsActive(true);
      setIsPaused(true);
    };
    msg.onresume = function () {
      setIsActive(true);
      setIsPaused(false);
    };
    msg.onend = function () {
      setIsActive(false);
      setIsPaused(false);
      window.speechSynthesis.cancel();
    };
    return;
  });

  const speechHandler = (
    msg: SpeechSynthesisUtterance | null,
    text: string,
  ) => {
    if (msg) {
      if (!isActive && !isPaused) {
        msg.text = text;
        window.speechSynthesis.speak(msg);
        return;
      } else if (isActive && !isPaused) {
        window.speechSynthesis.pause();
        return;
      } else if (isActive && isPaused) {
        window.speechSynthesis.resume();
        return;
      }
    }
  };

  return (
    <>
      {(audioEnabled || alwaysDisplay) && (
        <Button
          onClick={() => speechHandler(msg, textToSpeak)}
          className={`!w-8 !h-8 !rounded-md !shadow !bg-grey-lightest !border !border-solid !border-grey-dark ${
            answerButton && 'ml-3'
          }`}
          disabled={!audioEnabled}
          id="audio-btn"
        >
          <Icon
            icon={(isActive && isPaused) || !isActive ? 'volume-up' : 'pause'}
            size={16}
            color="grey-dark"
          />
        </Button>
      )}
    </>
  );
};

export default SpeechButton;
