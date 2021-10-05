export const compileText = (text: Array<any>) => {
  if (text.length === 0) return <span style={{ height: '20px' }} />;
  return text.map((textItem: any, index: number) => {
    const { annotations } = textItem; // アノテーションを取得
    const { color } = textItem.annotations; // アノテーションの色を取得
    const { href } = textItem; // リンクを取得

    const annotationClasses = Object.keys(annotations).filter(
      (key: string) => annotations[key] === true,
    );
    if (href)
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${annotationClasses.join(' ')}
            ${color !== 'default' && color}
          `}
        >
          {textItem.plain_text}
        </a>
      );
    return (
      <span
        key={index}
        className={`
          ${annotationClasses.join(' ')}
          ${color !== 'default' ? color : ''}
      `}
      >
        {textItem.plain_text}
      </span>
    );
  });
};
