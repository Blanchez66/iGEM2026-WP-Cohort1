interface HeaderProps {
  title: string;
  lead: string;
}

export function Header({ title, lead }: HeaderProps) {
  return (
    <header className="bg-hero py-5 mb-5">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 className="display-4 text-dark mt-5 mb-2">{title}</h1>
            <p className="lead mb-5 text-dark">{lead}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
