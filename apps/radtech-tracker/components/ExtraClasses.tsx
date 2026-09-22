// Free-form list of classes that aren't part of the RadTech prerequisite
// catalog at all — general ed, an elective, something registered for
// before checking this list (the original case this was built for: a
// Philosophy class that doesn't count toward RadTech). Never touches the
// 27-unit gauge; purely so nothing he's actually taking falls through the
// cracks.
import { useState } from 'react';
import { ExtraCourse } from '../types';

interface ExtraClassesProps {
  extras: ExtraCourse[];
  onAdd: (code: string, title: string, units: number) => void;
  onCycle: (id: string) => void;
  onRemove: (id: string) => void;
}

export function ExtraClasses({ extras, onAdd, onCycle, onRemove }: ExtraClassesProps) {
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [units, setUnits] = useState('');

  const submit = () => {
    if (!code.trim() || !title.trim()) return;
    onAdd(code.trim(), title.trim(), parseFloat(units) || 0);
    setCode('');
    setTitle('');
    setUnits('');
  };

  return (
    <>
      <h2 className="sec">Other classes</h2>
      <p className="hint">
        Anything he&apos;s taking that isn&apos;t a RadTech prerequisite — general
        education, an elective, a class he registered for before checking this
        list. These <b>don&apos;t count toward the 27 units</b> above; this is just
        so nothing he&apos;s actually enrolled in gets lost track of.
      </p>
      <div id="extra">
        {extras.map((e) => (
          <div
            key={e.id}
            className={`course ${e.status === 'done' ? 'done' : ''} ${
              e.status === 'prog' ? 'prog' : ''
            }`}
          >
            <button type="button" className="cyc" onClick={() => onCycle(e.id)}>
              {e.status === 'done' ? '✓' : e.status === 'prog' ? '●' : ''}
            </button>
            <div className="code">{e.code}</div>
            <div className="title">{e.title}</div>
            <div className="u">{e.units}u</div>
            <button
              type="button"
              className="x"
              aria-label={`Remove ${e.code}`}
              onClick={() => onRemove(e.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>
      <div className="addrow">
        <input
          className="textinput"
          style={{ width: 100 }}
          placeholder="Code (PHIL 1)"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <input
          className="textinput"
          style={{ flex: 1, minWidth: 140 }}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit();
          }}
        />
        <input
          className="textinput"
          style={{ width: 64 }}
          placeholder="Units"
          inputMode="decimal"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') submit();
          }}
        />
        <button type="button" className="addbtn" onClick={submit}>
          + Add
        </button>
      </div>
    </>
  );
}
